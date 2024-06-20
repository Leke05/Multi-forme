declare module "notistack" {
  import * as React from "react";

  type VariantType = "default" | "error" | "success" | "warning" | "info";

  interface SnackbarProviderProps {
    maxSnack?: number;
    autoHideDuration?: number;
    anchorOrigin?: {
      vertical: "top" | "bottom";
      horizontal: "left" | "center" | "right";
    };
    children?: React.ReactNode;
  }

  export class SnackbarProvider extends React.Component<SnackbarProviderProps> {}

  interface WithSnackbarProps {
    enqueueSnackbar: (
      message: string,
      options?: { variant: VariantType }
    ) => void;
  }

  export function withSnackbar<P extends WithSnackbarProps>(
    Component: React.ComponentType<P>
  ): React.ComponentType<Omit<P, keyof WithSnackbarProps>>;
  export function useSnackbar(): WithSnackbarProps;
}
