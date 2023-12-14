import { Button, Stack } from "@mui/material";

interface ButtonProps {
  content: string;
  isDisabled?: boolean;
  action: () => void;
}

const BasicButton: React.FC<ButtonProps> = ({
  content,
  isDisabled,
  action,
}) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        disabled={isDisabled}
        color="primary"
        onClick={action}
      >
        {content}
      </Button>
    </Stack>
  );
};

export default BasicButton;
