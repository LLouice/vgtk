(function() {var implementors = {};
implementors["cairo"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"cairo/struct.RectangleList.html\" title=\"struct cairo::RectangleList\">RectangleList</a>","synthetic":false,"types":["cairo::context::RectangleList"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"cairo/struct.Context.html\" title=\"struct cairo::Context\">Context</a>","synthetic":false,"types":["cairo::context::Context"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"cairo/struct.Device.html\" title=\"struct cairo::Device\">Device</a>","synthetic":false,"types":["cairo::device::Device"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"cairo/struct.ImageSurfaceData.html\" title=\"struct cairo::ImageSurfaceData\">ImageSurfaceData</a>&lt;'a&gt;","synthetic":false,"types":["cairo::image_surface::ImageSurfaceData"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"cairo/struct.Path.html\" title=\"struct cairo::Path\">Path</a>","synthetic":false,"types":["cairo::paths::Path"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"cairo/struct.Pattern.html\" title=\"struct cairo::Pattern\">Pattern</a>","synthetic":false,"types":["cairo::patterns::Pattern"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"cairo/struct.Region.html\" title=\"struct cairo::Region\">Region</a>","synthetic":false,"types":["cairo::region::Region"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"cairo/struct.Surface.html\" title=\"struct cairo::Surface\">Surface</a>","synthetic":false,"types":["cairo::surface::Surface"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"cairo/struct.MappedImageSurface.html\" title=\"struct cairo::MappedImageSurface\">MappedImageSurface</a>","synthetic":false,"types":["cairo::surface::MappedImageSurface"]}];
implementors["futures_channel"] = [{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.Receiver.html\" title=\"struct futures_channel::mpsc::Receiver\">Receiver</a>&lt;T&gt;","synthetic":false,"types":["futures_channel::mpsc::Receiver"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"futures_channel/mpsc/struct.UnboundedReceiver.html\" title=\"struct futures_channel::mpsc::UnboundedReceiver\">UnboundedReceiver</a>&lt;T&gt;","synthetic":false,"types":["futures_channel::mpsc::UnboundedReceiver"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"futures_channel/oneshot/struct.Sender.html\" title=\"struct futures_channel::oneshot::Sender\">Sender</a>&lt;T&gt;","synthetic":false,"types":["futures_channel::oneshot::Sender"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"futures_channel/oneshot/struct.Receiver.html\" title=\"struct futures_channel::oneshot::Receiver\">Receiver</a>&lt;T&gt;","synthetic":false,"types":["futures_channel::oneshot::Receiver"]}];
implementors["futures_executor"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"futures_executor/struct.Enter.html\" title=\"struct futures_executor::Enter\">Enter</a>","synthetic":false,"types":["futures_executor::enter::Enter"]}];
implementors["futures_task"] = [{"text":"impl&lt;'_, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"futures_task/struct.LocalFutureObj.html\" title=\"struct futures_task::LocalFutureObj\">LocalFutureObj</a>&lt;'_, T&gt;","synthetic":false,"types":["futures_task::future_obj::LocalFutureObj"]}];
implementors["futures_util"] = [{"text":"impl&lt;Fut&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"futures_util/future/struct.Shared.html\" title=\"struct futures_util::future::Shared\">Shared</a>&lt;Fut&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: <a class=\"trait\" href=\"futures_util/future/trait.Future.html\" title=\"trait futures_util::future::Future\">Future</a>,&nbsp;</span>","synthetic":false,"types":["futures_util::future::future::shared::Shared"]},{"text":"impl&lt;Fut&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"futures_util/stream/futures_unordered/struct.FuturesUnordered.html\" title=\"struct futures_util::stream::futures_unordered::FuturesUnordered\">FuturesUnordered</a>&lt;Fut&gt;","synthetic":false,"types":["futures_util::stream::futures_unordered::FuturesUnordered"]},{"text":"impl&lt;'_, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"futures_util/lock/struct.MutexLockFuture.html\" title=\"struct futures_util::lock::MutexLockFuture\">MutexLockFuture</a>&lt;'_, T&gt;","synthetic":false,"types":["futures_util::lock::mutex::MutexLockFuture"]},{"text":"impl&lt;'_, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"futures_util/lock/struct.MutexGuard.html\" title=\"struct futures_util::lock::MutexGuard\">MutexGuard</a>&lt;'_, T&gt;","synthetic":false,"types":["futures_util::lock::mutex::MutexGuard"]},{"text":"impl&lt;'_, T:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, U:&nbsp;?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"futures_util/lock/struct.MappedMutexGuard.html\" title=\"struct futures_util::lock::MappedMutexGuard\">MappedMutexGuard</a>&lt;'_, T, U&gt;","synthetic":false,"types":["futures_util::lock::mutex::MappedMutexGuard"]}];
implementors["gio"] = [{"text":"impl&lt;F, O, T, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"gio/struct.GioFuture.html\" title=\"struct gio::GioFuture\">GioFuture</a>&lt;F, O, T, E&gt;","synthetic":false,"types":["gio::gio_future::GioFuture"]}];
implementors["glib"] = [{"text":"impl&lt;T:&nbsp;'static, MM:&nbsp;<a class=\"trait\" href=\"glib/boxed/trait.BoxedMemoryManager.html\" title=\"trait glib::boxed::BoxedMemoryManager\">BoxedMemoryManager</a>&lt;T&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/boxed/struct.Boxed.html\" title=\"struct glib::boxed::Boxed\">Boxed</a>&lt;T, MM&gt;","synthetic":false,"types":["glib::boxed::Boxed"]},{"text":"impl&lt;T, MM:&nbsp;<a class=\"trait\" href=\"glib/shared/trait.SharedMemoryManager.html\" title=\"trait glib::shared::SharedMemoryManager\">SharedMemoryManager</a>&lt;T&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/shared/struct.Shared.html\" title=\"struct glib::shared::Shared\">Shared</a>&lt;T, MM&gt;","synthetic":false,"types":["glib::shared::Shared"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"glib/object/trait.IsClassFor.html\" title=\"trait glib::object::IsClassFor\">IsClassFor</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/object/struct.ClassRef.html\" title=\"struct glib::object::ClassRef\">ClassRef</a>&lt;T&gt;","synthetic":false,"types":["glib::object::ClassRef"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/object/struct.ObjectRef.html\" title=\"struct glib::object::ObjectRef\">ObjectRef</a>","synthetic":false,"types":["glib::object::ObjectRef"]},{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"glib/object/trait.ObjectType.html\" title=\"trait glib::object::ObjectType\">ObjectType</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/object/struct.WeakRef.html\" title=\"struct glib::object::WeakRef\">WeakRef</a>&lt;T&gt;","synthetic":false,"types":["glib::object::WeakRef"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/struct.EnumClass.html\" title=\"struct glib::EnumClass\">EnumClass</a>","synthetic":false,"types":["glib::enums::EnumClass"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/struct.FlagsClass.html\" title=\"struct glib::FlagsClass\">FlagsClass</a>","synthetic":false,"types":["glib::enums::FlagsClass"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/source/struct.CallbackGuard.html\" title=\"struct glib::source::CallbackGuard\">CallbackGuard</a>","synthetic":false,"types":["glib::source::CallbackGuard"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/translate/struct.List.html\" title=\"struct glib::translate::List\">List</a>","synthetic":false,"types":["glib::translate::List"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/translate/struct.SList.html\" title=\"struct glib::translate::SList\">SList</a>","synthetic":false,"types":["glib::translate::SList"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/translate/struct.HashTable.html\" title=\"struct glib::translate::HashTable\">HashTable</a>","synthetic":false,"types":["glib::translate::HashTable"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/translate/struct.Array.html\" title=\"struct glib::translate::Array\">Array</a>","synthetic":false,"types":["glib::translate::Array"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/translate/struct.PtrArray.html\" title=\"struct glib::translate::PtrArray\">PtrArray</a>","synthetic":false,"types":["glib::translate::PtrArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"enum\" href=\"glib/enum.GString.html\" title=\"enum glib::GString\">GString</a>","synthetic":false,"types":["glib::gstring::GString"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/struct.Sender.html\" title=\"struct glib::Sender\">Sender</a>&lt;T&gt;","synthetic":false,"types":["glib::main_context_channel::Sender"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/struct.SyncSender.html\" title=\"struct glib::SyncSender\">SyncSender</a>&lt;T&gt;","synthetic":false,"types":["glib::main_context_channel::SyncSender"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/struct.Receiver.html\" title=\"struct glib::Receiver\">Receiver</a>&lt;T&gt;","synthetic":false,"types":["glib::main_context_channel::Receiver"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/value/struct.Value.html\" title=\"struct glib::value::Value\">Value</a>","synthetic":false,"types":["glib::value::Value"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/value/struct.ValueArray.html\" title=\"struct glib::value::ValueArray\">ValueArray</a>","synthetic":false,"types":["glib::value::ValueArray"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/struct.VariantType.html\" title=\"struct glib::VariantType\">VariantType</a>","synthetic":false,"types":["glib::variant_type::VariantType"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"glib/send_unique/trait.SendUnique.html\" title=\"trait glib::send_unique::SendUnique\">SendUnique</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/send_unique/struct.Ref.html\" title=\"struct glib::send_unique::Ref\">Ref</a>&lt;'a, T&gt;","synthetic":false,"types":["glib::send_unique::Ref"]},{"text":"impl&lt;T, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/struct.SourceFuture.html\" title=\"struct glib::SourceFuture\">SourceFuture</a>&lt;T, F&gt;","synthetic":false,"types":["glib::source_futures::SourceFuture"]},{"text":"impl&lt;T, F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/struct.SourceStream.html\" title=\"struct glib::SourceStream\">SourceStream</a>&lt;T, F&gt;","synthetic":false,"types":["glib::source_futures::SourceStream"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"glib/struct.ThreadPool.html\" title=\"struct glib::ThreadPool\">ThreadPool</a>","synthetic":false,"types":["glib::thread_pool::ThreadPool"]}];
implementors["syn"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"syn/parse/struct.ParseBuffer.html\" title=\"struct syn::parse::ParseBuffer\">ParseBuffer</a>&lt;'a&gt;","synthetic":false,"types":["syn::parse::ParseBuffer"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()