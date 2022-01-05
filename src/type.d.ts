interface Theme {
  primaryDark: string;
  primaryLight: string;
  primaryHover: string;
  mobile: string;
}

interface ModalProps {
  isShown: boolean;
  hide: () => void;
  modalContent: JSX.Element;
  headerText: string;
}

interface UserData {
  id: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
  name?: string;
  job?: string;
}
interface UserBOProps{
  id:number
  name:string 
  email:string
  job:string
  showKeys:boolean
  avatar: string
}

interface PaginationContainerProps {
  pages: number;
  active: number;
}

interface InfoPage {
  number: number;
  link: string;
}

interface PartialUserData {
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
  name?: string;
  job?: string;
}

interface CustomIconButtonProps {
  onClick: MouseEventHandler;
  text: string;
  icon: ReactElement;
}

interface MenuProps extends BurgerProps {
  isLogged:boolean;
  handleLogout:()=>void
  props?: any;
}

interface StyledBurgerTypes {
  theme: Theme;
  open: boolean;
}

interface BurgerProps {
  open: boolean;
  handleClick: MouseEventHandler<HTMLButtonElement>;
}

interface UserProps {
  user: UserData;
  showKeys?: boolean;
}

type UserState = {
  users: UserData[];
};

type UserAction = {
  type: string;
  user: UserData | null;
  users?: UserData[];
  id?: number;
};

type UserMap = Record<string, UserData>;

type DispatchType = (args: UserAction) => UserAction;

interface MyEventTarget extends EventTarget {
  value: string;
}

interface MyFormEvent<T> extends React.FormEvent<T> {
  target: MyEventTarget;
}

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  onChange?: React.EventHandler<MyFormEvent<HTMLInputElement>>;
  name?:string;
  text?: string;
  value: string | undefined;
  placeholder: string | undefined;
}

interface ConfirmationModalProps {
  onConfirm: (name: string, job: string) => void;
  onCancel: () => void;
  message?: string;
}

interface UpdateModalProps extends ConfirmationModalProps {
  onConfirm: (data: PartialUserData) => void;
}

interface RemoveModalProps extends ConfirmationModalProps {
  onConfirm: () => void;
}

interface UserListProps {
  users: UserMap;
}

interface Theme {
  primaryDark: string;
  primaryLight: string;
  primaryHover: string;
  mobile: string;
}

interface UserList {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: UserData[];
}

interface UserFetch {
  data: UserData;
}

interface FBLoginAction {
  type: string;
  user: ReactFacebookLoginInfo | null
}

type DispatchFBType = (args: FBLoginAction) => FBLoginAction;

interface RouteProps {
  path:string,
  component: FunctionComponent,
  isPrivate: boolean
}