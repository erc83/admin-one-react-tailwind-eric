import { ReactNode, Children, cloneElement, ReactElement } from 'react'

type Props = {
    isColumn?: boolean
    children: ReactNode
}

const FormCheckRadioGroup = (props: Props) => {
    return (
        <div className={`flex justify-start flex-wrap -mb-3 ${props.isColumn ? 'flex-col' : ''}`}>
            {props.children}
            {
                Children.map(props.children, (child: ReactElement) => {
                    return cloneElement(child, {className: 'mr-6 mb-3 last:mr-0'})
                })
            }

        </div>
    )
}

export default FormCheckRadioGroup