import { Loading } from "solid-js";
import { Router, paths } from "./router";

export const App = () => (
  <Router>
    {(props) => (
      <>
        <header class="space-x-4 bg-purple-400 p-4">
          <a href={paths()}>Home</a>
          <a href={paths.about()}>About</a>
        </header>
        <Loading fallback={<main>Loading…</main>}>
          <main>{props.children}</main>
        </Loading>
      </>
    )}
  </Router>
);
