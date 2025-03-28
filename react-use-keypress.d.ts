declare module "react-use-keypress" {
  import { DependencyList } from "react";

  export default function useKeypress(
    key: string | string[],
    callback: (event: KeyboardEvent) => void,
    deps?: DependencyList
  ): void;
}
