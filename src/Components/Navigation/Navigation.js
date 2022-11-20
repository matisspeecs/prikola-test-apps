import logo from './../../logo.svg';

function navigation(dark) {
    console.log(dark);

    return (
        <div className={dark ? 'dark' : 'light'} onClick={clickEvent}>
            xx
            {dark && <div>asdas</div>}
        </div>
    );
}

function clickEvent() {
    console.log('es jau te');
}
  
export default navigation;