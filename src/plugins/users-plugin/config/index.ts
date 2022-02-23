import { Provider } from "nconf";

const nconf = new Provider({});
const currentEnv = process.env.NODE_ENV || "development";
try {
    nconf.file({ file: require.resolve(`./${currentEnv}.json`) });
} catch (e) {
    // ignore file errors  

}
export default nconf;