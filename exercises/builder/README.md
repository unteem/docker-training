# Tag

Reuse the debian discourse image with the build dependencies and tag it: `discourse-builder`

# MultiStage build

Use the MultiStage build to compile and install the binaries and the gems.

The path of the binaries are:
/usr/local/bin
The path of the gems are:
./vendor/bundle
