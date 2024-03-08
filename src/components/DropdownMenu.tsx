interface DropdownMenuProps {
}

const DropdownMenu = ({}: DropdownMenuProps) => {
  return (
    <div className="dropdown">
      <ul>
        <li className="link-item">
          <a>Link 1</a>
        </li>
        <li className="link-item">
          <a>Link 2</a>
        </li>
        <li className="link-item">
          <a>Link 3</a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
