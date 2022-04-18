import classname from 'classnames'

const Button = ({onClick, className, outline, children}) => {

    return (
        <button
            onClick={onClick}
            className={classname('button', className, {
                'button--outline': outline
            })}>
            {children}
        </button>
    );
};

export default Button;