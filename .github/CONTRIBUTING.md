# Contribution Guide

Please refer to these following rules and guidelines to ensure the application is built with a similar styling and writing process.

- All react pages and components will be functional components will be written as:

**Like This**

```jsx
export default function AboutPage() {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}
```

**Not Like This**

```jsx
const AboutPage = () => {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default AboutPage
```

Any props being passed through components should be written like so:

```jsx
// like this
export default function SomeLink({link, name}) {
  return (
    <a href={link}>{name}</a>
  )
}

// not like this
export default function SomeLink(props) {
  return (
    <a href={props.link}>{props.name}</a>
  )
}
```

Please import component links like this:

```jsx
import ComponentName from '@/components/ComponentName'
```

Not like this:

```jsx
import ComponentName from '../components/ComponentName'
```

This is because the client/next.config.js file is configured to accept @ signs to import directories to avoid `../../` path linking.
