import type { Props } from "astro";
import { IS_PARENT } from "../../constants.js";

const BASE_FONT_SIZE = 20;
const FONT_SIZE_STEP = 1;
const INDENT_STEP = 1;

function getFontSize(depth: number) {
    return `${Math.max(BASE_FONT_SIZE - depth * FONT_SIZE_STEP, 12)}px`;
}

function getPaddingLeft(depth: number) {
    return `${depth * INDENT_STEP}rem`;
}

function getLabel(label: string, depth: number) {
    return depth === 2 ? `${label}:` : label;
}

function getSubMenu(item, depth = 0) {
    return (
        <li class="np">
            <ul class="sub-menu">
                <li>
                    <details>
                        <summary
                            style={{
                                paddingLeft: getPaddingLeft(depth),
                                fontSize: getFontSize(depth),
                            }}
                        >
                            {getLabel(item.label, depth)}
                        </summary>
                        <ul className={"tree-" + (depth + 1)}>
                            {
                                item.subItems.map((subitem: any) => (
                                    <>
                                        {subitem.type === IS_PARENT ? (
                                            getSubMenu(subitem, depth + 1)
                                        ) : (
                                            <li>
                                                <a
                                                    href="#"
                                                    style={{
                                                        paddingLeft: getPaddingLeft(depth + 1),
                                                        fontSize: getFontSize(depth + 1),
                                                    }}
                                                >
                                                    {getLabel(subitem.label, depth + 1)}
                                                </a>
                                            </li>
                                        )}
                                    </>
                                ))
                            }
                        </ul>
                    </details>
                </li>
            </ul>
        </li>
    )
}
export default function SubMenu({ item }: Props) {
    return (getSubMenu(item));
}
