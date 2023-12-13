import { Button, Stack } from "@mui/material";

interface ButtonProps {
  content: string;
  action: () => void;
}

const BasicButton: React.FC<ButtonProps> = ({ content, action }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" color="primary" onClick={action}>
        {content}
      </Button>
    </Stack>
  );
};

export default BasicButton;
