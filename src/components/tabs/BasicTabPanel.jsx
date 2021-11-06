import { Box } from "@mui/system";

export default function BasicTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && <Box sx={{ pt: 3, pl: 2 }}>{children}</Box>}
    </div>
  );
}
