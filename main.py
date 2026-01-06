import subprocess
import decky
import os
import json

class Plugin:
    async def set_audio_balance(self, balance_value: int):
        try:
            left_vol = "100%"
            right_vol = "100%"

            if balance_value < 0:
                right_vol = f"{100 + balance_value}%"
            elif balance_value > 0:
                left_vol = f"{100 - balance_value}%"

            cmd = ["pactl", "set-sink-volume", "@DEFAULT_SINK@", left_vol, right_vol]
            subprocess.run(cmd, check=True)

            settings_path = os.path.join(decky.DECKY_PLUGIN_SETTINGS_DIR, "settings.json")
            with open(settings_path, "w") as f:
                json.dump({"balance": balance_value}, f)

            return True
        except Exception as e:
            decky.logger.error(f"Error setting balance: {e}")
            return False

    async def get_balance(self):
        try:
            settings_path = os.path.join(decky.DECKY_PLUGIN_SETTINGS_DIR, "settings.json")
            if os.path.exists(settings_path):
                with open(settings_path, "r") as f:
                    settings = json.load(f)
                    return settings.get("balance", 0)
            return 0
        except Exception as e:
            decky.logger.error(f"Error getting balance: {e}")
            return 0

    async def _main(self):
        balance = await self.get_balance()
        if balance != 0:
            await self.set_audio_balance(balance)
