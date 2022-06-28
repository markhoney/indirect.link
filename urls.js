const identifiers = ['dclid', 'fbclid', 'gclid', 'gclsrc', 'msclkid'];

for (const id of this.identifiers) {
	if (url.searchParams.has(id)) url.searchParams.delete(id);
}
