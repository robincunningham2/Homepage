
if (typeof document == 'undefined') {
    throw new Error('Didn\'t find document object.');
}

const Storage = {
    data: () => {
        try {
            let data = {};
            for (let i = 0; localStorage.key(i) != null; i++) {
                const key = localStorage.key(i),
                    item = localStorage.getItem(key);
                
                data[key] = JSON.parse(item);
            }

            data['_length'] = localStorage.length;
            return data;
        } catch(e) {
            throw new Error('Storage.set failed.'
                + '\n\tThis might be an issue in the Storage system.'
                + '\n\tTo reset, run Storage.clear()');
        }
    },
    set: (key, data) => {
        try {
            if (typeof key != 'string')
                throw new TypeError(`Cannot convert type ${typeof key} to string`);
            
            data = JSON.stringify(data);
            return localStorage.setItem(key, data);
        } catch(e) {
            throw new Error('Storage.set failed.'
                + '\n\tThis might be an issue in the Storage system.'
                + '\n\tTo reset, run Storage.clear()');
        }
    },
    get: (key) => {
        try {
            if (typeof key != 'string')
                throw new TypeError(`Cannot convert type ${typeof key} to string`);
            let data = localStorage.getItem(key);
            data = JSON.parse(data);
            return data;
        } catch(e) {
            throw new Error('Storage.set failed.'
                + '\n\tThis might be an issue in the Storage system.'
                + '\n\tTo reset, run Storage.clear()');
        }
    },
    delete: (key) => {
        try {
            if (typeof key != 'string')
                throw new TypeError(`Cannot convert type ${typeof key} to string`);
            return localStorage.removeItem(key);
        } catch(e) {
            throw new Error('Storage.set failed.'
                + '\n\tThis might be an issue in the Storage system.'
                + '\n\tTo reset, run Storage.clear()');
        }
    },
    clear: () => {
        return localStorage.clear();
    }
};
