# Roadmap Visualizer 🗺️

An interactive learning roadmap visualizer built with D3.js that displays hierarchical learning paths for different tech roles.

Developer: Dev 5

## Features ✨

- **Role Selection**: Choose from 8 different tech career paths
- **Interactive Tree Visualization**: Explore learning paths as an interactive horizontal tree
- **Zoom & Pan**: Navigate large roadmaps with smooth zoom and pan controls
- **Expand/Collapse**: Click nodes to expand or collapse branches
- **Detail Panel**: View detailed information about each learning topic
- **Tooltips**: Hover over nodes for quick information
- **Keyboard Navigation**: Use arrow keys to navigate the tree
- **Export**: Download roadmap as SVG or PNG
- **Responsive Design**: Works on desktop and tablet devices
- **Dark Mode**: Supports light and dark themes

## File Structure 📁

```
roadmap/
├── index.html          # Role selection page
├── roadmap.html        # D3 tree visualization page
├── css/
│   └── roadmap.css     # Custom styles for roadmap
├── js/
│   ├── utils.js        # Utility functions
│   ├── selection.js    # Role selection logic
│   ├── roles.js        # Role data and filtering
│   ├── ui-panel.js     # Detail panel functionality
│   └── d3-tree.js      # D3 tree visualization logic
└── data/
    ├── frontend.json   # Frontend developer roadmap
    ├── backend.json    # Backend developer roadmap
    ├── fullstack.json  # Full stack developer roadmap
    ├── mobile.json     # Mobile developer roadmap (to be added)
    ├── devops.json     # DevOps engineer roadmap (to be added)
    └── ...             # Other role roadmaps
```

## How to Use 🚀

### Running Locally

1. Simply open `index.html` in a modern browser
2. Select a role from the grid
3. Explore the interactive roadmap
4. Click nodes to expand/collapse and view details

No build process or server required!

### Navigating the Roadmap

**Mouse Controls:**
- **Click** a node to expand/collapse its children
- **Click** a node to show detail panel
- **Drag** to pan around the tree
- **Scroll** to zoom in/out
- **Hover** over nodes for tooltips

**Keyboard Controls:**
- **Arrow Right**: Move to first child or expand node
- **Arrow Left**: Move to parent
- **Arrow Up/Down**: Navigate between siblings
- **Enter**: Expand/collapse focused node
- **Escape**: Close detail panel

**Zoom Controls:**
- Use **+/-** buttons in the control panel
- **Reset** button returns to original view
- **Collapse/Expand All** buttons for quick navigation

## Adding New Roadmaps 📝

### 1. Create JSON Data File

Create a new JSON file in `roadmap/data/` following this structure:

```json
{
  "name": "Role Name",
  "id": "role-id",
  "meta": {
    "description": "Brief description",
    "duration": "12-18 months",
    "level": "beginner",
    "topics": ["Topic 1", "Topic 2"],
    "resources": [
      {"name": "Resource Name", "url": "https://example.com"}
    ]
  },
  "children": [
    {
      "name": "Child Node",
      "id": "child-id",
      "meta": { /* same structure */ },
      "children": [ /* nested children */ ]
    }
  ]
}
```

**Field Descriptions:**
- `name`: Display name of the node
- `id`: Unique identifier (lowercase, hyphen-separated)
- `meta.description`: Detailed description
- `meta.duration`: Estimated learning time
- `meta.level`: Difficulty (`beginner`, `intermediate`, or `advanced`)
- `meta.topics`: Array of topics covered
- `meta.resources`: Array of learning resources with name and URL
- `children`: Array of child nodes (recursive structure)

### 2. Add Role to roles.js

Open `roadmap/js/roles.js` and add your role to the `roles` array:

```javascript
{
    id: 'your-role-id',
    name: 'Your Role Name',
    subtitle: 'Brief subtitle',
    category: 'development', // or 'data', 'design', 'operations'
    badge: 'Popular',        // optional
    icon: '🎯',             // emoji icon
    description: 'Detailed description of the role...'
}
```

### 3. Test Your Roadmap

1. Open `index.html`
2. Search for your new role
3. Click to view the roadmap
4. Verify all nodes load correctly
5. Check that expand/collapse works
6. Test detail panel information

## Acceptance Criteria ✅

The roadmap visualizer should:

- [x] Load role selection page without errors
- [x] Display all 8 role cards with icons and descriptions
- [x] Filter roles by search and category
- [x] Navigate to visualization page on role selection
- [x] Load and parse JSON data correctly
- [x] Render D3 tree with horizontal layout
- [x] Show all nodes with proper styling (color by difficulty)
- [x] Expand/collapse nodes on click with smooth transitions
- [x] Display tooltips on hover
- [x] Show detail panel with full node information
- [x] Support zoom in/out with mouse wheel
- [x] Support pan with mouse drag
- [x] Respond to keyboard navigation (arrow keys, Enter)
- [x] Export to SVG and PNG formats
- [x] Work in both light and dark modes
- [x] Be responsive on different screen sizes
- [x] Handle errors gracefully (missing data, network issues)

## Technical Details 🔧

### Technologies Used

- **D3.js v7**: Tree layout and visualization
- **Tailwind CSS**: Styling and responsive design
- **Vanilla JavaScript**: No framework dependencies
- **HTML5**: Semantic markup
- **LocalStorage**: Persist role selection

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Performance Considerations

- Nodes beyond depth 2 are collapsed by default
- Smooth transitions (400ms duration)
- Efficient SVG rendering with D3
- Debounced search (300ms delay)
- Lazy-loaded roadmap data (fetched on demand)

## Color Scheme 🎨

The roadmap uses difficulty-based colors:

- **Beginner**: Green (`#22c55e`)
- **Intermediate**: Cyan (`#00bcd4`)
- **Advanced**: Violet (`#a855f7`)

Theme colors from Tailwind config:
- Primary: `hsl(190 95% 45%)` (Cyan)
- Accent: `hsl(270 80% 60%)` (Violet)
- Navy: `hsl(220 40% 13%)`

## Troubleshooting 🔍

**Roadmap doesn't load:**
- Check browser console for errors
- Verify JSON file exists in `data/` folder
- Ensure role ID matches JSON filename

**Nodes not expanding:**
- Check if data has `children` array
- Verify JSON structure is correct
- Look for console errors

**Export not working:**
- Ensure modern browser with SVG support
- Check if pop-up blocker is enabled
- Try different export format (SVG vs PNG)

## Future Enhancements 🚀

- [ ] Add search within roadmap tree
- [ ] Progress tracking (mark completed topics)
- [ ] Custom roadmap builder
- [ ] Share roadmap via URL
- [ ] Print-friendly view
- [ ] More role templates
- [ ] Collaborative roadmaps
- [ ] Integration with course platform

## Credits

Built with ❤️ for Learn-Sphere Platform
