import {
  definePlugin,
  PanelSection,
  PanelSectionRow,
  SliderField,
  ServerAPI,
  staticClasses,
} from "decky-frontend-lib";
import { useState, useEffect } from "react";
import { FaHeadphones } from "react-icons/fa";

const Content = ({ serverAPI }: { serverAPI: ServerAPI }) => {
  const [balance, setBalance] = useState<number>(0);

  useEffect(() => {
    const loadBalance = async () => {
      const result = await serverAPI.callPluginMethod("get_balance", {});
      if (result.success) {
        setBalance(result.result as number);
      }
    };
    loadBalance();
  }, []);

  const handleBalanceChange = async (val: number) => {
    setBalance(val);
    await serverAPI.callPluginMethod("set_audio_balance", { balance_value: val });
  };

  return (
    <PanelSection title="Audio Balance">
      <PanelSectionRow>
        <SliderField
          label="Left / Right Balance"
          description="Adjust headphone audio panning"
          min={-100}
          max={100}
          step={5}
          value={balance}
          onChange={handleBalanceChange}
          showValue={true}
        />
      </PanelSectionRow>
    </PanelSection>
  );
};

export default definePlugin((serverApi: ServerAPI) => {
  return {
    title: <div className={staticClasses.Title}>Audio Balancer</div>,
    content: <Content serverAPI={serverApi} />,
    icon: <FaHeadphones />,
    onDismount() {},
  };
});
