import { memo } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/shared/ui/dialog';

interface SelectSkillProps {
  open: boolean;
  setIsOpen: (value: boolean) => void;
}

export const SelectSkill = memo((props: SelectSkillProps) => {
  const { open, setIsOpen } = props;

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add your skill</DialogTitle>
          <DialogDescription>
            When you add your skill our administrator will verify it and it will be added to the
            general list
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
});
