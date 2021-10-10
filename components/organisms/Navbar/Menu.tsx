import cx from 'classnames';

interface MneuProps {
    title : string;
    active? : boolean
}
export default function Menu(props : Partial<MneuProps>) {
    const {title, active} =props;
    const classTitle = cx({
        'nav-link' : true,
        'active' : active
    })
    return (
      <li className="nav-item my-auto">
        <a className={classTitle} aria-current="page" href="/#">
          {title}
        </a>
      </li>
    )
}
