
export const Notifiable = () => (target: any) => {
  console.log('Notifiable ', { target });
}

export const Field = () => (target: any, propName: string) => {
  console.log('Field', { target, propName });
  let value: any;

  const getter = function () {
    console.log(`### Get => ${propName}`);
    return value || 0;
  }

  const setter = function (newValue: any) {
    console.log(`### Set: ${propName} => ${newValue}`);
    value = newValue;
  }

  //delete target[propName];

  //Object.defineProperty(target.constructor.prototype, propName, { get: getter, set: setter, enumerable: true, configurable: true });
}