import { useState } from "react";
import { Container, Controls, ImageContainer } from "./components";
import { useGetCatImage } from "./hooks/getCatImage";

function App() {
  const [enabled, setEnabled] = useState(true);
  const [autoRefresh, setAutoRefresh] = useState(false);

  const { catUrl, loading, fetchCatImage } = useGetCatImage(
    enabled,
    autoRefresh
  );

  return (
    <Container>
      <Controls
        enabled={enabled}
        autoRefresh={autoRefresh}
        loading={loading}
        onToggleEnabled={() => setEnabled((prev) => !prev)}
        onToggleAutoRefresh={() => setAutoRefresh((prev) => !prev)}
        onGetCat={fetchCatImage}
      />

      <ImageContainer src={catUrl} loading={loading} />
    </Container>
  );
}

export default App;
