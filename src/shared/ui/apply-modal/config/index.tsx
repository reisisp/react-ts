export interface ApplyModalProps {
  children: string;
  msg: string;
  confirm: () => void;
  isActive?: boolean;
}
