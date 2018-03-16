using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace TimeManager
{
    public class TimeManagerNotifyIcon : IDisposable
    {
        private readonly NotifyIcon _notifyIcon;
        private readonly ContextMenuStrip _menu;
        private readonly ToolStripMenuItem _itemShow;
        private readonly ToolStripMenuItem _itemClose;

        public TimeManagerNotifyIcon()
        {
            _notifyIcon = new NotifyIcon();
            _menu = new ContextMenuStrip();
            _itemShow = new ToolStripMenuItem();
            _itemClose = new ToolStripMenuItem();

            _notifyIcon.ContextMenuStrip = _menu;
            _notifyIcon.Visible = true;
            _notifyIcon.Icon = Resources.clock;
            _notifyIcon.DoubleClick += (sender, e) => OnShowClicked?.Invoke(this, e);

            _menu.Items.AddRange(new ToolStripItem[] { _itemClose, _itemShow });

            _itemShow.Text = "Show";
            _itemShow.Click += (sender, e) => OnShowClicked?.Invoke(this, e);

            _itemClose.Text = "Close";
            _itemClose.Click += (sender, e) => OnClosedClicked?.Invoke(this, e);
        }

        public string Text
        {
            get => _notifyIcon.Text;
            set => _notifyIcon.Text = value;
        }

        public void Dispose()
        {
            _notifyIcon.Visible = false;
            _notifyIcon.Icon = null;

            _notifyIcon.Dispose();
            _menu.Dispose();
            _itemClose.Dispose();
            _itemShow.Dispose();
        }

        public event EventHandler OnShowClicked;
        public event EventHandler OnClosedClicked;
    }
}
