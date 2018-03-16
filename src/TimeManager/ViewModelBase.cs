using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using TimeManager.Annotations;

namespace TimeManager
{
    public class ViewModelBase : INotifyPropertyChanged
    {
        private readonly Dictionary<string, object> _properties = new Dictionary<string, object>();

        public event PropertyChangedEventHandler PropertyChanged;

        [NotifyPropertyChangedInvocator]
        protected virtual void OnPropertyChanged([CallerMemberName] string propertyName = null)
        {
            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }

        public T Get<T>([CallerMemberName] string propertyName = null)
        {
            if (propertyName == null) return default(T);

            return _properties.ContainsKey(propertyName) ? (T)_properties[propertyName] : default(T);
        }

        public void Set<T>(T value, [CallerMemberName] string propertyName = null)
        {
            if (propertyName == null) return;

            _properties[propertyName] = value;

            PropertyChanged?.Invoke(this, new PropertyChangedEventArgs(propertyName));
        }
    }
}
