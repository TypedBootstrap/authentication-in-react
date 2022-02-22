# Authentication in React

![App preview](https://pbs.twimg.com/media/FMNlDt9XEAIVRi0?format=jpg&name=4096x4096)

## Introduction

This proof-of-concept has been heavily inspired by a [blog post](https://kentcdodds.com/blog/authentication-in-react-applications) I read by Kent C. Dodds (which I encourage you to go and read also). What this application does is checks to see if the current user is authenticated. If they are not, then they are restricted access to routes specifically for authenticated users.

I have achieved this by wrapping the `<App />` component in a couple of react providers. Firstly the `<AuthProvider />` is responsible for bootstrapping the app data. Then secondly the `<UserProvider />` is responsible for keeping the user data up to date in memory.

The `<App/ >` component will render the `<UnauthenticatedApp />` component until the current users data is retrieved. Once that data has been fulfilled it is determined that the user is logged in and the `<AuthenticatedApp />` component will be rendered instead. It will be literally impossible to render one side of the app or the other if there is no user.

## License

Licensed under MIT. Totally free for private or commercial projects.

## Installation

> It is advised that you download this repo as opposed to cloning. This will avoid any accidental project commits to this repository.

## Credits

-   [Authentication in React Applications](https://kentcdodds.com/blog/authentication-in-react-applications) by [Kent C. Dodds](https://kentcdodds.com)
-   [Modern Sign In Page with Split Screen Format](https://startbootstrap.com/snippets/sign-in-split) by [Start Bootstrap](https://startbootstrap.com)
-   Photo by [John Rodenn Castillo](https://unsplash.com/@nightcrawler1986?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/blue?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyTex)
