import { createGlobalState } from "react-hooks-global-state";

interface InitialStateType {
  photoToScrollTo: number | null;
}

const initialState: InitialStateType = { photoToScrollTo: null };
const { useGlobalState } = createGlobalState(initialState);

export const useLastViewedPhoto = () => {
  return useGlobalState("photoToScrollTo");
};
