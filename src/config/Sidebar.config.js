import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SendIcon from "@mui/icons-material/Send";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import DeleteIcon from "@mui/icons-material/Delete";
import AllInboxIcon from "@mui/icons-material/AllInbox";
export const SIDEBAR_DATA = [
  {
    name: "inbox",
    title: "Inbox",
    icon: AddToPhotosIcon,
  },
  {
    name: "stared",
    title: "Stared",
    icon: StarBorderIcon,
  },
  {
    name: "sent",
    title: "Sent",
    icon: SendIcon,
  },
  {
    name: "drafts",
    title: "Drafts",
    icon: InsertDriveFileIcon,
  },
  {
    name: "bin",
    title: "Bin",
    icon: DeleteIcon,
  },
  {
    name: "allmails",
    title: "All Mails",
    icon: AllInboxIcon,
  },
];
export default SIDEBAR_DATA;
