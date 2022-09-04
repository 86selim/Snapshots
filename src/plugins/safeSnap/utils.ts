import {
  ExecutionData,
  SafeConfig,
  SafeModuleType,
  SafeType
} from '@/helpers/safe';

export function mapLegacyConfig(config: any): SafeConfig[] {
  if (config[0]?.safe) {
    return config;
  }

  return [
    {
      safe: {
        name: 'Main Safe',
        type: SafeType.GNOSIS,
        network: '4',
        address: '0x6934DeeB18a7B7F25DbFB1ed8a0b361e42e4D2aF'
      },
      modules: [
        {
          type: SafeModuleType.REALITY,
          address: '0x06340d38ED304703Ca200e3f9CD5f902C8605c43'
        }
      ]
    },
    {
      safe: {
        name: 'Secondary Safe',
        type: SafeType.GNOSIS,
        network: '4',
        address: '0x485255d5005454b73631C1A61C782211Da28e650'
      },
      modules: [
        {
          type: SafeModuleType.UMA,
          address: '0xcD32691da48b3Fe4E7CB5593582C982d70971768'
        }
      ]
    }
  ];
}

export function mapLegacyExecutionData(executionData: any): ExecutionData[] {
  if (executionData[0]?.safe) {
    return executionData;
  }

  return [
    {
      safe: {
        name: 'Main Safe',
        type: SafeType.GNOSIS,
        network: '4',
        address: '0x6934DeeB18a7B7F25DbFB1ed8a0b361e42e4D2aF'
      },
      module: {
        type: SafeModuleType.REALITY,
        address: '0x06340d38ED304703Ca200e3f9CD5f902C8605c43'
      },
      batches: []
    }
  ];
}
