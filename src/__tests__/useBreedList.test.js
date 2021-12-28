import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import useBreedList from "../useBreedList";

// cant test a hook outside of a component, so we create a fake component
// bc component can be anything that returns markup or compatible value, eg. null
// function getBreedList(animal) {
//   let list;
//   function TestComponent() {
//     list = useBreedList(animal);
//     return null;
//   }

//   render(<TestComponent />);
//   return list;
// }

test("gives an empty array with no animal", async () => {
  const { result } = renderHook(() => useBreedList());
  const [breedList, status] = result.current;

  expect(breedList).toHaveLength(0);
  expect(status).toBe("unloaded");
});
