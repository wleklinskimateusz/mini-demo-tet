import {
  TextInput,
  tet,
  Label,
  Checkbox,
  Button,
  HelperText,
} from "@virtuslab/tetrisly-react";
import { Editor } from "./Editor";

function App() {
  return (
    <tet.div
      w="100vw"
      h="100vh"
      display="grid"
      gridTemplateColumns="1fr 1fr "
      alignItems="center"
      p="$space-component-padding-4xLarge"
      bg="$color-background-brand-subtle"
      borderRadius="$border-radius-xLarge"
    >
      <tet.div
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <tet.form
          display="flex"
          flexDirection="column"
          w="$dimension-1600"
          gap="$space-component-gap-2xLarge"
          boxShadow="$elevation-bottom-300"
          padding="$space-component-padding-4xLarge"
          borderRadius="$border-radius-xLarge"
          bg="$color-background-brand-surface"
        >
          <tet.h1 textAlign="center" text="$typo-header-4xLarge">
            Login Page
          </tet.h1>
          <tet.div
            display="flex"
            flexDirection="column"
            gap="$space-component-gap-medium"
          >
            <tet.div>
              <Label htmlFor="name" label="Name" />
              <TextInput id="name" name="name" />
            </tet.div>
            <tet.div>
              <Label htmlFor="password" label="Password" />
              <TextInput
                state="alert"
                id="password"
                name="password"
                type="password"
              />
              <HelperText
                hasBeforeIcon
                intent="alert"
                text="Password is incorrect"
              />
            </tet.div>
            <tet.div
              display="flex"
              alignItems="center"
              gap="$space-component-gap-small"
            >
              <Checkbox id="remember" name="remember" />
              <Label htmlFor="remember" label="Remember Me" />
            </tet.div>
          </tet.div>
          <tet.div display="flex" flexDirection="column" alignItems="center">
            <Button
              custom={{
                default: {
                  w: "100%",
                },
              }}
              type="button"
              appearance="primary"
            >
              Submit
            </Button>
            <Button type="button" variant="bare">
              Forgot the password?
            </Button>
          </tet.div>
        </tet.form>
      </tet.div>
      <Editor />
    </tet.div>
  );
}

export default App;
