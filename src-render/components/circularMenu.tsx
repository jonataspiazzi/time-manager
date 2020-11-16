import { loadavg } from 'os';
import React, { useEffect, useRef, useState } from 'react';
import svg from './circular-menu.svg';

function getRulerClipMaskItem(element: HTMLElement | null, childName: string): SVGElement {
  const item = element?.querySelector(`svg #ruler > g[id^=${childName}] g`);
  if (!item) return null;

  const style = window.getComputedStyle(item);
  if (!style) return null;

  const clipPath = style.clipPath;
  if (!clipPath) return;

  const id = /url\(\"#(?<id>[A-Za-z0-9-_]+)\"\)/g.exec(clipPath)?.groups?.id;

  const tags = element?.querySelector(`#${id}`)?.children;

  if (!tags || !tags.length) return null;

  return tags[0] as SVGElement;
}

function getRulerTransformOrigin(element: HTMLElement | null) {
  const centerTag = element?.querySelector('svg #helpers #center') as SVGRectElement;
  const x = Number(centerTag.x.baseVal.value);
  const y = Number(centerTag.y.baseVal.value);

  if (isNaN(x)) return null;
  if (isNaN(y)) return null;

  const root = element?.querySelector('svg') as SVGSVGElement;
  const viewBox = root?.viewBox?.baseVal;
  if (!viewBox) return null;

  const { width, height } = viewBox;

  return `${(100 * x / width).toPrecision(4)}% ${(100 * y / height).toPrecision(4)}%`;
}

export default function CircularMenu() {
  const [menu, setMenu] = useState(`<p>Loading</p>`);
  const refDiv = useRef<HTMLDivElement>(null);

  async function load() {
    const req = await fetch(svg);
    const msg = await req.text();

    setMenu(msg);

    const transformOrigin = getRulerTransformOrigin(refDiv.current);
    const clipMaskBg = getRulerClipMaskItem(refDiv.current, 'background');
    const clipMaskHl = getRulerClipMaskItem(refDiv.current, 'highlight');

    if (clipMaskBg && transformOrigin) {
      clipMaskBg.style.transformOrigin = transformOrigin;
    }

    if (clipMaskHl && transformOrigin) {
      clipMaskHl.style.transformOrigin = transformOrigin;
    }

    setPercentage(.98);
  }

  /**
   * Update ruler display component based on a percentage.
   * @param percentage 0 to 1
   */
  function setPercentage(percentage: number) {
    const bg = getRulerClipMaskItem(refDiv.current, 'background');
    const hl = getRulerClipMaskItem(refDiv.current, 'highlight');

    bg.style.transform = `rotate(${percentage * 120}deg)`;
    hl.style.transform = `rotate(${percentage * 120 - 120}deg)`;
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="circular-menu" dangerouslySetInnerHTML={{ __html: menu }} ref={refDiv}>
    </div>
  );
}