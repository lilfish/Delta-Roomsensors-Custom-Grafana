+++
# -----------------------------------------------------------------------
# Do not edit this file. It is automatically generated by API Documenter.
# -----------------------------------------------------------------------
title = "getStandardFieldConfigs"
keywords = ["grafana","documentation","sdk","@grafana/ui"]
type = "docs"
+++

## getStandardFieldConfigs variable

### getStandardFieldConfigs variable

Returns collection of common field config properties definitions

<b>Signature</b>

```typescript
getStandardFieldConfigs: () => (FieldConfigPropertyItem<any, string, StringFieldConfigSettings> | FieldConfigPropertyItem<any, number, NumberFieldConfigSettings> | FieldConfigPropertyItem<any, ThresholdsConfig, ThresholdsFieldConfigSettings> | FieldConfigPropertyItem<any, ValueMapping[], ValueMappingFieldConfigSettings> | FieldConfigPropertyItem<any, DataLink[], StringFieldConfigSettings>)[]
```
<b>Import</b>

```typescript
import { getStandardFieldConfigs } from '@grafana/ui';
```