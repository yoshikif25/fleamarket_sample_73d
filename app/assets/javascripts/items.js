$(document).on('turbolinks:load', ()=> {
  // 画像用のinputを生成する関数
  const buildFileField = (index)=> {
    const html = `<input accept="image/*" class="js-file" data-index="${index}" style="display: none;", type="file" name="item[item_imgs_attributes][${index}][url]" id="item_item_imgs_attributes_${index}_url">`;
    return html;
  }
  // プレビュー用のimgタグを生成する関数
  const buildImg = (index, url)=> {
    const html = `<div class="delete"><img data-index="${index}" src="${url}" width="100px" height="100px">
                  <div class="imgdelete">削除</div></div>`;
    return html;
  }
  $(document).on("click", '.imgdelete', function(){
    //プレビュー要素を取得
    var target_image = $(this).parent()
    //プレビューを削除
    target_image.remove();
    //inputタグに入ったファイルを削除
    file_field.val("")
  })

  // file_fieldのnameに動的なindexをつける為の配列
  let fileIndex = [1,2,3,4,5,6,7,8,9,10];

  $('#image-input').on('change', '.js-file', function(e) {
    // labelタグのfor属性を変更
    $('#image-input__label').attr('for', 'item_item_imgs_attributes_' + fileIndex[0] + '_url');
    // fileIndexの先頭の数字を使ってinputを作る
    $('#image-input').append(buildFileField(fileIndex[0]));
    fileIndex.shift();
    // 末尾の数に1足した数を追加する
    fileIndex.push(fileIndex[fileIndex.length - 1] + 1)
    const targetIndex = $(this).parent().data('index');
    // ファイルのブラウザ上でのURLを取得する
    const file = e.target.files[0];
    const blobUrl = window.URL.createObjectURL(file);
    $('#image-input').before(buildImg(targetIndex, blobUrl));
  });
});

$(document).on("click", '.sell-main__delete-image', function(){
  //プレビュー要素を取得
  var target_image = $(this).parent().parent()
  //プレビューを削除
  target_image.remove();
  //inputタグに入ったファイルを削除
  file_field.val("")
})