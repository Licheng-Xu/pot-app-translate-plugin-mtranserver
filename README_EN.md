# Pot-App MTranServer Translation Plugin

[中文](README.md) | English

## Usage Instructions
1. Deploy MTranServer service
   - Refer to [MTranServer ReadMe](https://github.com/xxnuo/MTranServer/tree/main#%E6%9C%8D%E5%8A%A1%E5%99%A8%E9%83%A8%E7%BD%B2)

2. Install the plugin
   - Download the plugin from the Release page
   - Install it in pot app via *Config - Service - Translate - Add Extension - Install Plugin*

3. Configure the plugin
   - Enter `http://{ip}:{port}` in Request Path. If empty, the default value `http://127.0.0.1:8989` will be used
   - Enter the MTranServer service token in API Token. If empty, it means no token is required

## Supported Languages
The following languages are supported. Please ensure that the relevant models has been installed in MTranServer service:
- Auto-detect (auto)
- Chinese Simplified (zh-CN)
- Chinese Traditional (zh-TW)
- English (en)
- Japanese (ja)
- Korean (ko)
- French (fr)
- Spanish (es)
- Russian (ru)
- German (de)
- Italian (it)
- Turkish (tr)
- Portuguese (pt)
- Arabic (ar)
- Persian (fa)

## Technical Description
[MTranServer](https://github.com/xxnuo/MTranServer) is A high-performance offline translation server with minimal resource requirements - runs on CPU with just 1GB memory, no GPU needed. Average response time of 50ms per request. Supports translation of major languages worldwide.

## License
- This software is licensed under the [GNU General Public License (GPL), version 3 or later](LICENSE).
