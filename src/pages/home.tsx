import { createSignal } from "solid-js";

const HomePage = () => {
  const [couter, setCouter] = createSignal<number>(0);

  return (
    <div class="p-4">
      <p>Count: {couter()}</p>
      <button
        type="button"
        class="rounded bg-violet-400 px-4 py-2 active:bg-violet-500"
        onClick={() => setCouter((prev) => prev + 1)}
      >
        Count
      </button>
    </div>
  );
};

export default HomePage;
