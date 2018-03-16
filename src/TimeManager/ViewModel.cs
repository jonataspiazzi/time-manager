using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Media;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Input;

namespace TimeManager
{
    public class ViewModel : ViewModelBase, IDisposable
    {
        private readonly Timer _waterTimer = new Timer();
        private readonly Timer _fiftyTenTimer = new Timer();
        private readonly TimeManagerNotifyIcon _notifyIcon = new TimeManagerNotifyIcon();

        public ViewModel()
        {
            WaterStart = new RelayCommand(OnWaterStart);
            WaterStop = new RelayCommand(OnWaterStop);
            WaterReset = new RelayCommand(OnWaterReset);
            FiftyTenStart = new RelayCommand(OnFiftyTenStart);
            FiftyTenStop = new RelayCommand(OnFiftyTenStop);
            FiftyTenReset = new RelayCommand(OnFiftyTenReset);
            SetWater10 = new RelayCommand(OnSetWater10);
            SetWater5 = new RelayCommand(OnSetWater5);
            SetFifty = new RelayCommand(OnSetFifty);
            SetTen = new RelayCommand(OnSetTen);

            _notifyIcon.OnShowClicked += (sender, e) => Window.Visibility = Visibility.Visible;
            _notifyIcon.OnClosedClicked += (sender, e) => Application.Current.Shutdown();
            
            _waterTimer.CountDownChanged += (sender, e) =>
            {
                WaterCurrentCountDown = _waterTimer.CountDown.ToString("g");
                _notifyIcon.Text = $"Water {_waterTimer.CountDown:g}, 50/10 {_fiftyTenTimer.CountDown:g}";
            };
            _waterTimer.Time = TimeSpan.FromMinutes(5);
            _waterTimer.AutoReset = true;
            _waterTimer.TimeEnded += (sender, e) =>
            {
                var player = new SoundPlayer(Resources.drinkWater);
                player.PlaySync();
                player.Dispose();
            };

            _fiftyTenTimer.CountDownChanged += (sender, e) =>
            {
                FiftyTenCurrentCountDown = _fiftyTenTimer.CountDown.ToString("g");
                _notifyIcon.Text = $"Water {_waterTimer.CountDown:g}, 50/10 {_fiftyTenTimer.CountDown:g}";
            };
            _fiftyTenTimer.Time = TimeSpan.FromMinutes(50);
            _fiftyTenTimer.TimeEnded += (sender, e) =>
            {
                foreach (var screen in System.Windows.Forms.Screen.AllScreens)
                {
                    new TimeEndedWindow(screen).Show();
                }

                System.Windows.Threading.Dispatcher.Run();
                Thread.CurrentThread.SetApartmentState(ApartmentState.STA);
            };
        }

        public string WaterCurrentCountDown
        {
            get => Get<string>();
            private set => Set(value);
        }

        public string FiftyTenCurrentCountDown
        {
            get => Get<string>();
            private set => Set(value);
        }

        public View Window { get; set; }

        public ICommand WaterStart { get; }
        public ICommand WaterStop { get; }
        public ICommand WaterReset { get; }
        public ICommand FiftyTenStart { get; }
        public ICommand FiftyTenStop { get; }
        public ICommand FiftyTenReset { get; }
        public ICommand SetWater10 { get; }
        public ICommand SetWater5 { get; }
        public ICommand SetFifty { get; }
        public ICommand SetTen { get; }


        private void OnWaterStart()
        {
            _waterTimer.Start();
        }

        private void OnWaterStop()
        {
            _waterTimer.Stop();
        }

        private void OnWaterReset()
        {
            _waterTimer.Reset();
        }

        private void OnFiftyTenStart()
        {
            _fiftyTenTimer.Start();
        }

        private void OnFiftyTenStop()
        {
            _fiftyTenTimer.Stop();
        }

        private void OnFiftyTenReset()
        {
            _fiftyTenTimer.Reset();
        }

        public void OnSetWater10()
        {
            _waterTimer.Stop();
            _waterTimer.Time = TimeSpan.FromMinutes(10);
        }

        public void OnSetWater5()
        {
            _waterTimer.Stop();
            _waterTimer.Time = TimeSpan.FromMinutes(5);
        }

        public void OnSetFifty()
        {
            _fiftyTenTimer.Stop();
            _fiftyTenTimer.Time = TimeSpan.FromMinutes(50);
        }

        public void OnSetTen()
        {
            _fiftyTenTimer.Stop();
            _fiftyTenTimer.Time = TimeSpan.FromMinutes(10);
        }

        public void Dispose()
        {
            _notifyIcon.Dispose();
        }
    }
}
