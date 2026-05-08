# @swiss-ui/icons

SVG icon set for the Swiss UI design system.

## Installation

```bash
npm install @swiss-ui/icons
```

## Usage

### As a Library

You can import individual icon functions or a general `getIcon` helper.

```typescript
import { ArrowRight, getIcon } from '@swiss-ui/icons';

// Using a specific icon function
const arrow = ArrowRight({ size: 32, color: 'blue' });

// Using the helper
const icon = getIcon('check-circle', { strokeWidth: 1.5 });
```

### As a Web Component

Register the web component (auto-registers on import from the subpath) and use it in your HTML:

```typescript
// Import to register <swiss-icon>
import '@swiss-ui/icons/web-components';
```

```html
<swiss-icon name="search" size="20" color="#333" stroke-width="2"></swiss-icon>
```

## Customization

All icons support the following properties:

| Property | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `size` | `number` | `24` | Width and height in pixels |
| `color` | `string` | `currentColor` | Stroke color (supports any CSS color value) |
| `strokeWidth` | `number` | `2` | Thickness of the icon lines |
| `class` | `string` | `undefined` | Additional CSS class for the `<svg>` element |

## Development

### Adding New Icons

1. Place your new SVG file in `src/icons/`.
2. Ensure it uses a `24x24` viewbox and `stroke="currentColor"`.
3. Run the build script to generate the TypeScript source:

```bash
npm run build:icons
```

### Building the Project

To build the library for distribution:

```bash
npm run build
```

## License

AGPL-3.0-only. See [LICENSE](LICENSE) for details.
