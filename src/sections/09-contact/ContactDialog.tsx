import type { DialogItem } from '@/data/dialogData';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ContactDialogProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  dialogItemData: DialogItem;
}

const ContactDialog = ({
  isOpen,
  dialogItemData,
  onOpenChange,
}: ContactDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton={false}
        className='rounded-2xl sm:max-w-129.5'
      >
        <div
          className={cn(
            'relative w-full flex justify-center h-45.75 sm:h-56.25 rounded-t-2xl',
            dialogItemData.bgColor
          )}
        >
          <div className='absolute bottom-0 max-w-55.25 sm:max-w-65.5'>
            <img src={dialogItemData.image} alt='' />
          </div>
        </div>
        <div className='flex flex-col gap-4 justify-center p-6'>
          <div className='text-center'>
            <p className='font-bold text-lg sm:text-xl text-neutral-950'>
              {dialogItemData.title}
            </p>
            <p className='font-medium text-sm sm:text-md not-odd:text-neutral-700'>
              {dialogItemData.description}
            </p>
          </div>
          <Button
            type='button'
            className='h-11 lg:h-12 w-full'
            onClick={() => onOpenChange(false)}
          >
            {dialogItemData.buttonText}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
