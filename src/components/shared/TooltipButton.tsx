import * as Tooltip from '@radix-ui/react-tooltip';
export const TooltipButton: React.FC<{
  children: React.ReactNode;
  content: string;
  onClick?: () => void;
  className?: string;
}> = ({ children, content, onClick, className = "px-2 rounded-lg transition-colors" }) => (
  <Tooltip.Root delayDuration={300}>
    <Tooltip.Trigger asChild>
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </Tooltip.Trigger>
    <Tooltip.Portal>
      <Tooltip.Content
        className="bg-black text-white px-2 py-1 text-[10px] rounded-lg shadow-lg z-50"
        sideOffset={5}
      >
        {content}
        <Tooltip.Arrow className="fill-black" />
      </Tooltip.Content>
    </Tooltip.Portal>
  </Tooltip.Root>
);
