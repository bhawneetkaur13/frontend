import { DraggableNode } from '../draggableNode';
import TextIcon from '../assets/TextIcon';
import LlmIcon from '../assets/LlmIcon';
import OutputIcon from '../assets/OutputIcon';
import InputNode from '../assets/InputNode';
import './toolbar.css';

export const PipelineToolbar = () => {
    return (
        <div className="toolbar">
            <div className="toolbar-content">
                <DraggableNode type="customInput" label="Input" IconComponent={InputNode} iconWidth={18} iconHeight={18} />
                <DraggableNode type="llm" label="LLM" IconComponent={LlmIcon} iconWidth={18} iconHeight={24} />
                <DraggableNode type="customOutput" label="Output" IconComponent={OutputIcon} iconWidth={18} iconHeight={18} />
                <DraggableNode type="text" label="Text" IconComponent={TextIcon} iconWidth={18} iconHeight={24} />
            </div>
        </div>
    );
};
