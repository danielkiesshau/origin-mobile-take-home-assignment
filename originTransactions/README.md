# Running de project
1. `yarn`
2. create a `.env` based on `.env.example`
3. (iOS only) `bundle exec pod install``
3. `yarn android or ios`


# Technical Decisions
## Libraries
**styled-components**
Since there is a need to share components with a web application, using "standard css" with this libs helps share styling between both platforms

**react-native-mmkv**
A more secure and more perfomatic way to save data locally in the device

**react-hook-forms + yup**
For a more scalable form manipulation and validation

## Scaffold
**UI (pages)**
Are divided into:
- `*.container`: Component's logic
- `*.native`: Component's UI
- `*.styles`: Component's styes

This is important to make a more scalable project and to make sure a change in UI won't break a component's logic
## services
Communication with external APIs
## libs
Architectural layer to interface communication with common libraries used in the app. Adopting this approach we can change core libraries as needed
## dtos
Responsible to transform data received from APIs to application's entities
## contexts
I decided to use the context api due to the simplicity of the project's requirements
## pages -> components
UI Components
### Final Observations
The `AuthService` is a mock to simulate a backend authentication, it is not production code, and not a valid approach for real projects
