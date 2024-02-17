import sharedConfig, {
  type TailwindConfig,
} from "../../packages/config-tailwind/tailwind.config"

const config: Pick<TailwindConfig, "presets"> = {
  presets: [sharedConfig],
}

export default config
