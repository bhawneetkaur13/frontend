export const DraggableNode = ({ type, label, IconComponent, className, iconWidth = 24, iconHeight = 24 }) => {
  const onDragStart = (event, nodeType) => {
    const appData = { nodeType };
    event.target.style.cursor = 'grabbing';
    event.dataTransfer.setData('application/reactflow', JSON.stringify(appData));
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={`${type} ${className}`}
      onDragStart={(event) => onDragStart(event, type)}
      onDragEnd={(event) => (event.target.style.cursor = 'grab')}
      style={{ 
        cursor: 'grab', 
        minWidth: '80px', 
        height: '60px',
        display: 'flex', 
        alignItems: 'center', 
        borderRadius: '8px',
        backgroundColor: '#f0f0f0',
        justifyContent: 'center', 
        flexDirection: 'column',
        color: '#333', 
        border: '2px solid #333',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        gap: '8px'
      }} 
      draggable
    >
      {IconComponent && <IconComponent width={iconWidth} height={iconHeight} />} 
      <span style={{ color: '#333' }}>{label}</span>
    </div>
  );
};
