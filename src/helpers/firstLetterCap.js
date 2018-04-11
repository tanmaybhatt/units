export default function(string) {
    if(!string)
        return string;
    return string[0].toUpperCase() + string.substr(1);
}