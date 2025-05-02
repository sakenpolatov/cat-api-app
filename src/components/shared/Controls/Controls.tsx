import { Button } from "../../ui/Button/Button";
import { Checkbox } from "../../ui/Checkbox/Checkbox";
import styles from "./controls.module.scss";

interface ControlsProps {
  enabled: boolean;
  autoRefresh: boolean;
  loading: boolean;
  onToggleEnabled: () => void;
  onToggleAutoRefresh: () => void;
  onGetCat: () => void;
}

export const Controls = ({
  enabled,
  autoRefresh,
  loading,
  onToggleEnabled,
  onToggleAutoRefresh,
  onGetCat,
}: ControlsProps) => {
  return (
    <div className={styles.controls}>
      <div className={styles.checkboxes}>
        <Checkbox
          label="Enabled"
          checked={enabled}
          onChange={onToggleEnabled}
        />
        <Checkbox
          label="Auto-refresh every 5 second"
          checked={autoRefresh}
          onChange={onToggleAutoRefresh}
        />
      </div>

      <Button
        label={loading ? "Loading..." : "Get cat"}
        onClick={onGetCat}
        disabled={!enabled || loading}
      />
    </div>
  );
};
