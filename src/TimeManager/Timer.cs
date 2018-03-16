using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Input;

namespace TimeManager
{
    public class Timer
    {
        private int _timeSeconds;
        private int _countDownSeconds;
        private readonly System.Timers.Timer _timer;

        public bool AutoReset { get; set; }

        public TimeSpan CountDown
        {
            get => TimeSpan.FromSeconds(_countDownSeconds);
            set
            {
                _countDownSeconds = (int)value.TotalSeconds;
                CountDownChanged?.Invoke(this, new EventArgs());
            }
        }

        public TimeSpan Time
        {
            get => TimeSpan.FromSeconds(_timeSeconds);
            set
            {
                _timeSeconds = (int)value.TotalSeconds;
                CountDown = value;
            }
        }

        public Timer()
        {
            _timer = new System.Timers.Timer
            {
                Interval = 1000,
                AutoReset = true
            };

            _timer.Elapsed += (sender, e) => InternalTimerElapsed();
        }

        private void InternalTimerElapsed()
        {
            CountDown -= TimeSpan.FromSeconds(1);

            if (CountDown > TimeSpan.Zero) return;

            if (!AutoReset) Stop();
            CountDown = AutoReset ? Time : TimeSpan.Zero;
            TimeEnded?.Invoke(this, new EventArgs());
        }

        public void Start()
        {
            _timer.Start();
        }

        public void Stop()
        {
            _timer.Stop();
        }

        public void Reset()
        {
            CountDown = Time;
            Stop();
        }

        public event EventHandler CountDownChanged;
        public event EventHandler TimeEnded;
    }
}
