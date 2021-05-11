import css from 'css';

function recursivelyAddProperties(outputObject, non_iterable_rules) {
    const rules = Object.entries(non_iterable_rules);

    for (const [key, value] of rules) {
        if (value.type === 'media') {
            const name = value.media;
            const secondLayerRules = value.rules;
            outputObject[name] = recursivelyAddProperties({}, secondLayerRules);
        } else if (value.type === 'rule') {
            const name = value.selectors[0];
            const delaractions = value.declarations;
            outputObject[name] = {};
            Object.values(delaractions).forEach(declaration => {
                if (declaration.type === 'declaration') {
                    const propName = camelCase(declaration.property);
                    outputObject[name][propName] = declaration.value;
                }
            })
        } else {
            throw new Error(`Implement me! Send an issue to the repository: https://github.com/evenstensberg/css-to-js-nodejs`);
        }
    }
    return outputObject
}

// https://stackoverflow.com/questions/6009386/capitalizing-the-letter-following-a-dash-and-removing-the-dash
function camelCase(string) {
    return string.replace(/-([a-z])/ig, function (all, letter) {
        return letter.toUpperCase();
    });
}

export default function cssToJS(in_css) {
    const obj = css.parse(in_css, {});
    const outputObject = recursivelyAddProperties({}, obj.stylesheet.rules);
    return outputObject;
}