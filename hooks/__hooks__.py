from pass_raw import pass_raw
from seperate_media import seperate_media
from process_less import process_less

hooks = {
    "page.render.post" : [pass_raw],
    "site.output.post" : [process_less, seperate_media],
}
