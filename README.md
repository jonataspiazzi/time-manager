A brief description of all features desired in this project:

# Drink Water

A time lap that display a notification to estimulate the user to drink water.

**Params:**  

- **Enabled** `(boolean)`: Enables or disables this feature.

- **Enable Audio** `(boolean)`: Defines if an audio should play at the end of a cycle

- **Audio File** `(string)`: Audio file to play at the end of a cycle.

- **Enable Screen Lock** `(boolean)`: Defines if an should lock all screens (with an image) at the end of a cycle.

- **Screen Lock Image** `(string)`: An image to be display on screen lock.

- **Lap Time** `(number)`: The time in minutes of each lap.

**Actions:**

- **Start**: Starts crono lap.

- **Stop**: Stop the current lap.

- **Reset**: Stop + Start

# Pomodoro

A simple pomodoro clock.

**Params:**

- **Enabled** `(boolean)`: Enables or disables this feature.

- **Pomodoro** `(number)`: Time in minutes of a dedicated activity.

- **Short Break** `(number)`: Time in minutes of a short break.

- **Long Break** `(number)`: Time in minutes of a long break.

- **Current Cycle** `(number)`: Number of the current cycle of pomodoro.

- **Enable Audio** `(boolean)`: Defines if an audio should play at the end of a cycle

- **Audio File** `(string)`: Audio file to play at the end of a cycle.

- **Enable Screen Lock** `(boolean)`: Defines if an should lock all screens (with an image) at the end of a cycle.

- **Screen Lock Image** `(string)`: An image to be display on screen lock.

**Actions:**

- **Start Pomodoro**: Starts pomodoro.

- **Start Short Break**: Starts short break.

- **Start Long Break**: Starts long break.

- **Stop**: Stop the current cycle.

- **Reset**: Stop + Start current cycle.

# Activity Log

Log the activities you are doing. Great to keep a tracking of how much time you're expending. Can group logs by category and can add custom properties to be specified by activity. Also show log of activities and allow to edit them. Can export the activities as CSV or JSON.

**Params:**

- **Enabled** `(boolean)`: Enable or disable this feature.

- **Request Description at End** `(boolean)`: If true an activity can be started without any detail, at the end of the activity will be requested all information.

- **Remember to Close** `(boolean)`: If true, from time to time this app will ask to user if is still working on a started activity.

- **Remember Cycle Time** `(number)`: Time in minutes between each message.

- **Custom Args** `(string[])`: By default an activity has `Name`, `Category` and `Description`. This field enable extended properties to be added to an activity object.

**Actions:**

- **Start Activity**: Start and activity.

- **Stop Activity**: Stop the current activity.

- **Swap Activities**: Stop the current activity and immediately starts another.

- **Edit Log**: Edit the activities already logged.

- **Export**: Save all activities created as CSV or JSON.