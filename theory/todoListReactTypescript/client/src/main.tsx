import * as ReactDOM from "react-dom/client";
import { App } from "./App";
import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const mainBlockHtml = document.getElementById("root");
const root = ReactDOM.createRoot(mainBlockHtml as HTMLElement);

root.render(<App />);
